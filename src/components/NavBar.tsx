import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link";
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{data, fetching}] = useMeQuery()
    let body = null

    // data is loading
    if(fetching){
        
    // user logged in
    } else if(data?.me?.username){
        body = (
            <Flex>
                <Box mr={2}>{data?.me?.username}</Box>
                <Button variant="link">Logout</Button>
            </Flex>
        )
    // user is not logged in
    } else {
        body =  (
            <>
                <NextLink href="/login">
                        <Link color="white" mr={2}>Login</Link>
                </NextLink>
                <NextLink href="/login">
                    <Link color="white">Register</Link>
                </NextLink>
            </>
        );
    }

    return (
       <Flex bg="teal" p={4}>
           <Box ml={"auto"}>
                {body}
           </Box>
       </Flex> 
    );
}