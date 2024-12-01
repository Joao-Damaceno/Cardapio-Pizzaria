import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const MenuScreen = () => {
  const [cart, setCart] = useState([]);

  const addToOrder = (item) => {
    setCart([...cart, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Joãozinho Lanches</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToOrder(item)}>
              <Text style={styles.addButtonText}>Adicionar ao Pedido</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.orderButton} onPress={() => alert('Pedido Realizado!')}>
        <Text style={styles.orderButtonText}>Fazer Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#D32F2F',
  },
  addButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orderButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
