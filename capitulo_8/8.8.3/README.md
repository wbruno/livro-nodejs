$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
$ sudo installer -pkg AWSCLIV2.pkg -target /
$ aws configure
$ aws ec2 describe-instances --query "Reservations[].Instances[].{InstanceId:InstanceId,KeyName:KeyName,StateName:State.Name,PlacementAvailabilityZone:Placement.AvailabilityZone}"
