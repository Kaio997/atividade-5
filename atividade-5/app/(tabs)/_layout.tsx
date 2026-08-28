import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Contatos',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Cadastro',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="tarefas"
        options={{
          title: 'Tarefas',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="imc"
        options={{
          title: 'IMC',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="busca"
        options={{
          title: 'Busca',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}