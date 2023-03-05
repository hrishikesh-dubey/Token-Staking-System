import { Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    return (
        <Flex className="Footer-Container">
            <Flex className="Footer-Links">
                <Flex className="Footer-Link"><Flex className="BT">D</Flex>(ubey) <Flex className="BT">J</Flex>(indal)</Flex>
            </Flex>
        </Flex>
    )
}