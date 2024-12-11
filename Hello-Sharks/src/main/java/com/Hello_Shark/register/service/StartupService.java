package com.Hello_Shark.register.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.Hello_Shark.register.model.Startup;

import jakarta.transaction.Transactional;

@Service
@Transactional
public interface StartupService {
	
	
	String addNewStartup(Startup newstartup) ;
	
	List<Startup> getAllStartups();
	
	Startup updateStartup(Startup updatedStartup);
	
	Startup getByDetails(String email, String password);
	
	Boolean deleteStartup(Long id);
}
