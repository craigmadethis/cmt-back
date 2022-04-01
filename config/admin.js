module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a8ddfb775434097b4e8cae78b1686aaa'),
  },
});
