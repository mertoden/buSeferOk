import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from "./Card.style";

const Card = (props) => {
    return (
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>

        </View>
        <TouchableOpacity style={styles.button_container} 
        onPress={() => alert('Selamlar ' + props.title + " bugün ne yapmak istersin?")}>
            <Text style={styles.button_title}>Touch Button</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Card;