const cdk = require('@aws-cdk/core');
const {Function, AssetCode, Runtime} = require('@aws-cdk/aws-lambda');

class Ec2ManagerStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const managerFunction = new Function(this, 'ec2ManagerFunction', {
      code: new AssetCode('lambda/ec2-manager'),
      runtime: Runtime.NODEJS_10_X,
      handler: 'index.handler',
      environment: {
        INSTANCE_IDS: 'my-instance-ids-strings',
      },
    });
  }
}

module.exports = {Ec2ManagerStack};
