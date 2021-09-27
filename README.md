# Fider example

This example deploys self-hosted version of [Fider](https://getfider.com/). Internally it uses a PostgreSQL database to store the data.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp-starters%2Ffider&plugins=postgresql&envs=JWT_SECRET%2CEMAIL_NOREPLY%2CEMAIL_MAILGUN_API%2CEMAIL_MAILGUN_DOMAIN%2CHOST_DOMAIN&optionalEnvs=HOST_DOMAIN&EMAIL_NOREPLYDesc=Account+from+which+emails+will+be+sent&EMAIL_MAILGUN_APIDesc=Mailgun+API+key&EMAIL_MAILGUN_DOMAINDesc=Mailgun+email+domain&HOST_DOMAINDesc=Domain+on+Railway.+Available+after+first+deployment)

## ✨ Features

- Fider
- PostgreSQL

## 💁‍♀️ How to use

- Click the Railway button 👆
- Add the environment variables
  - You can leave the `HOST_DOMAIN` empty when you first deploy the starter. Read the Notes section below for instructions on how to add it.
- The first deployment will fail as we left the `HOST_DOMAIN` environment variable empty. Head over to `/deployments/domains` under your project and copy the production environment domain and add it as an environment variable with `HOST_DOMAIN` as the key.
- Your app should now automagically be redeployed and work as expected.

## 📝 Notes

- [Fider website](https://getfider.com/)
- [Fider docs](https://getfider.com/docs)
