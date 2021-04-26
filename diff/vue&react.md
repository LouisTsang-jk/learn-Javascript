# Vue
```
<template>
  <div id="app">
    <p>to do list:</p >
    <ul>
      <li v-for="todo in list">{{todo}}</li>
    </ul>
    <input type="text" v-model="keyword">
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      keyword: '',
      list: [
        '吃饭',
        '睡觉'
      ]
    }
  },
  methods: {
    addTodo () {
      this.list.push(this.keyword)
      this.keyword = ''
    }
  }
};
</script>
```
# React
```
import { useState } from "react";
import "./styles.css";

export default function App() {
  const addTodo = function () {
    setList([...list, keyword]);
    setKeyword("");
  };
  const [list, setList] = useState(["吃饭", "睡觉"]);
  const [keyword, setKeyword] = useState("");
  return (
    <div className="App">
      <p>to do list:</p>
      <ul>
        {list.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
```