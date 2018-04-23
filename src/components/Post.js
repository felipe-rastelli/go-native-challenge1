import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 10
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  author: {
    color: '#999999'
  },
  description: {
    color: '#666666'
  }
});

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.divider} />
    <Text style={styles.description}>{description}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
