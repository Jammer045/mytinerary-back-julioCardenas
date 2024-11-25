const handleGoogleAuthCallback = (req, res) => {
  try {
    const token = req.token || req.body?.response?.token || req.user?.token;
    if (!token) {
      console.error("No token available in request");
      return res.redirect("http://localhost:5173/signin?error=no_token");
    }
    return res.redirect(`http://localhost:5173/auth-callback?token=${token}`);
  } catch (error) {
    return res.redirect("http://localhost:5173/signin?error=callback_error");
  }
};

export default handleGoogleAuthCallback;
