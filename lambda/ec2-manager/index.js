const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

exports.handler = async (event) => {
  console.log('Received ' + event);

  return {
    statusCode: 200,
    message: 'Hello',
  };
};
