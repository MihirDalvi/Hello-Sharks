package com.Hello_Shark.register.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

//package com.hellosharks.repository;
import com.Hello_Shark.register.model.Shark;

public interface SharkRepository extends JpaRepository<Shark, Long> {
	List<Shark> findByStatusFalse();
	List<Shark> findByStatusTrue();
	Shark findByGmailAndPassword(String gmail, String password);
}

