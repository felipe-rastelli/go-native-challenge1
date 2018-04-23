import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import Post from 'components/Post';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  scrollContainer: {
    paddingVertical: 10
  }
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica '
          + 'e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido '
          + 'pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica '
          + 'e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido '
          + 'pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Diego Schell Fernandes',
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica '
          + 'e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido '
          + 'pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.'
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          { this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          )) }
        </ScrollView>
      </View>
    );
  }
}

