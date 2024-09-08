import React from 'react';
import { Button, View } from 'react-native';

const AddButton: React.FC = () => {
    return (
        <View>
            <Button title="Click Me" onPress={() => {console.log('pressed');}} />
        </View>
    );
};

export default AddButton;
