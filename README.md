# SlashTheAPIDog.com
Sample API running at [slashtheapidog.com](https://slashtheapidog.com), which is used in the guide: [WorkWithAPIs.com](https://workwithapis.com).

Deployed via serverless to AWS lambda.

## Contributing
Please open a pull request. We'd love to take updates!

## Development Work
### Installing
- Checkout the repo and run `yarn` to install the packages you need.
- Add the needed `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your `./bash_profile` (to deploy)

### Development
Run `sls offline start` for a local API at http://localhost:3000

### Deploying
Run `sls deploy`

Made by the team at [Parabola](https://www.parabola.io)
