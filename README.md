## Description

A minimal [NestJS](https://github.com/nestjs/nest) example that can be deployed to AWS, powered by Lambda + ApiGateway + Docker Image

## Steps

1. First create a [CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html) stack, by using the template [ecr.yml](./ecr.yml). An [ecr registry repository](https://aws.amazon.com/ecr/) should be created in your AWS account.

2. Build the Docker image and push it to The ecr registry you just created:

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <your_aws_account_id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t my-private-repo .
docker tag test:latest 100209637061.dkr.ecr.us-east-1.amazonaws.com/test:latest
docker tag test:latest 100209637061.dkr.ecr.us-east-1.amazonaws.com/test:latest
```

3. Create the actual Lambda + ApiGateway stack, by using the CloudFormation template [cf.yml](./cf.yml).




## License

Nest is [MIT licensed](LICENSE).
