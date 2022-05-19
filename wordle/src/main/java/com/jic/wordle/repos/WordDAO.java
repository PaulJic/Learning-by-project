package com.jic.wordle.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jic.wordle.entities.Word;

@Repository
public interface WordDAO extends JpaRepository<Word, String> {
	@Query(value= "select word from parole where word like :query", nativeQuery=true)
	List<Word> findWordLike(@Param("query") String query);
}
