import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext.js";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = React.useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam("id")
    );
    const [title, setTitle] = React.useState(blogPost.title || "");
    const [content, setContent] = React.useState(blogPost.content || "");
    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                    editBlogPost(blogPost.id, title, content);
                    navigation.pop();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default EditScreen;
