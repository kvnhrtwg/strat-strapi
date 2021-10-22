module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://api.kevinhartwig.de",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "1333fb804bb47d1770d16f39ac4ae224"),
    },
  },
});
