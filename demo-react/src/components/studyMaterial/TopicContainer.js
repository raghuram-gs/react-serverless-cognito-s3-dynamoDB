import React from "react";
import "./TopicContainer.css";
import TopicCard from "./TopicCard";

export default function TopicContainer() {

    const topicsList = {
        topics: [
            {
                topic: "EC2",
                description: "A Virtual machine"
            },
            {
                topic: "EBS",
                description: "A Block storage"
            },
            {
                topic: "S3",
                description: "A simple storage service"
            },
            {
                topic: "EFS",
                description: "Elastic file storage"
            },
            {
                topic: "DynamoDB",
                description: "A NoSQL database"
            },
            {
                topic: "Neptune",
                description: "A Graph database"
            },
            {
                topic: "Lambda",
                description: "A serverless compute service"
            },
            {
                topic: "ECS",
                description: "Elastic container service"
            },
            {
                topic: "VPC",
                description: "Virtual private cloud"
            },
            {
                topic: "Subnet",
                description: "Sub divison of VPC"
            },
            {
                topic: "IAM",
                description: "Identity and access management"
            },
            {
                topic: "Cloudwatch",
                description: "Logs and alarms"
            },
            {
                topic: "Cloudtrail",
                description: "User activity and API calls"
            },
            {
                topic: "AWS Trusted Advisor",
                description: "Recommendations of best practices"
            },
            {
                topic: "NAT Gateway",
                description: "Connectivity to internet"
            }
        ]
    };


    function buildTopics() {
        const items = []

        for (const { topic, description } of topicsList.topics) {
            console.log(topic);
            items.push(<TopicCard topic={topic} description={description}></TopicCard>)
        }

        return items;
    }

    return (
        <div className="topicContainer">
            {buildTopics()}
        </div>
    );
}
