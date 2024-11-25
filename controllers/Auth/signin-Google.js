import User from "../../models/User.js";

const googleSignIn = async (req, res) => {
  try {
    const { user, token } = req;

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { verified: true },
      { new: true }
    ).select("-password");

    res.json({
      success: true,
      message: "Google login successful",
      response: {
        token,
        user: {
          id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          verified: updatedUser.verified,
          picture: updatedUser.picture,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in Google signIn controller",
      error: error.message,
    });
  }
};

export default googleSignIn;
