module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5bbe7800987cc6e9494200842dc6fa7'),
  },
});
