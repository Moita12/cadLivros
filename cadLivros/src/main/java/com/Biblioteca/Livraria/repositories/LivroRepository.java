package com.Biblioteca.Livraria.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Biblioteca.Livraria.entities.Livro;


public interface LivroRepository extends JpaRepository<Livro, Long>{
	
}
