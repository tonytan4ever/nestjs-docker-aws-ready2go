## Description

A minimal [NestJS](https://github.com/nestjs/nest) example that can be deployed to AWS, powered by Lambda + ApiGateway + Docker Image

## Steps

1. First create a [CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html) stack, by using the template [ecr.yml](./ecr.yml). An [ecr registry repository](https://aws.amazon.com/ecr/) should be created in your AWS account.

2. Build the Docker image and push it to The ecr registry you just created:

Replace `your_repo_name` with your preferred repo name. In our exampel [ecr.yml](./ecr.yml) I named `my-private-repo`.

```bash
aws ecr get-login-password --region <your-aws-region> | docker login --username AWS --password-stdin <your_aws_account_id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t <your_repo_name> .
docker tag <your_repo_name>:latest <your_aws_account_id>.dkr.ecr.<your-aws-region>.amazonaws.com/<your_repo_name>:latest
docker tag <your_repo_name>:latest <your_aws_account_id>.dkr.ecr.<your-aws-region>.amazonaws.com/<your_repo_name>:latest
```

3. Create the actual Lambda + ApiGateway stack, by using the CloudFormation template [cf.yml](./cf.yml).




## License

Nest is [MIT licensed](LICENSE).
