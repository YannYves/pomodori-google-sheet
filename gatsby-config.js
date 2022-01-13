module.exports = {
  siteMetadata: {
    title: `google-sheet-api`,
  },

  plugins: [
    "@chakra-ui/gatsby-plugin",

    // OR using environment variables
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        credentials: {
          type: "service_account",
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, "\n"),
          client_email: process.env.CLIENT_EMAIL,
          client_id: "",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      },
    },
  ],
}
