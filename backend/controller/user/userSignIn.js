const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");

        const user = await userModel.findOne({ email });

        if (!user) throw new Error("User not found");

        // 🛠 Debugging Logs
        console.log("🔹 User found:", user);
        console.log("🔹 Received Password:", password);
        console.log("🔹 Stored Password (hashed):", user.password);

        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("🔹 Password Match:", checkPassword);

        if (checkPassword) {
            const tokenData = { _id: user._id, email: user.email };
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: "8h" });

            res.cookie("token", token, { httpOnly: true, secure: true }).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false,
            });
        } else {
            throw new Error("Please check Password");
        }
    } catch (err) {
        console.error("❌ Error:", err.message);
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;