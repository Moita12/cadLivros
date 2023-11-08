
package com.Biblioteca.Livraria.entities;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Table;
	import jakarta.persistence.Id;

	@Entity
	@Table(name="tb_livro")
	public class Livro {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
		
		private String descricao;
		
		private String isbn ;
		
		public Livro() {
			
		}

		public Livro(Long id, String descricao, String isbn) {
			super();
			this.id = id;
			this.descricao = descricao;
			this.isbn = isbn;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescricao() {
			return descricao;
		}

		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}

		public String getIsbn() {
			return isbn;
		}

		public void setIsbn(String isbn) {
			this.isbn = isbn;
		}

	}