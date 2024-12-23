import React from 'react';
import { View, Text } from '../components/Core';

type NotFoundProps = object

export const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <View>
            <Text>
                NotFound
            </Text>
        </View>
    );
};

export default NotFound;