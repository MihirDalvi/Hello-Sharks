package com.Hello_Shark.register.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hello_Shark.register.model.Startup;

@Repository
public interface StartupRepository extends JpaRepository<Startup, Long> {

	Optional<Startup> findByEmail(String email);
}