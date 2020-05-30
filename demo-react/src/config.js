export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "raggyfiles"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://cw4yzd90d9.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_otrMozxOd",
    APP_CLIENT_ID: "757u1q119kba355lm6bcqmouod",
    IDENTITY_POOL_ID: "ap-southeast-2:8f59fbec-d79f-4178-bc28-25a919e19a94"
  }
};
