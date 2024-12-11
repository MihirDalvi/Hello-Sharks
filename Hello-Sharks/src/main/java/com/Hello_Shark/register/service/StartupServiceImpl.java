 package com.Hello_Shark.register.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Hello_Shark.register.model.Startup;
import com.Hello_Shark.register.repository.StartupRepository;

@Service
@Transactional
public class StartupServiceImpl  implements StartupService {

	@Autowired
	 private StartupRepository startupRepository;
	
	
	@Override
	public String addNewStartup(Startup newstartup) {
		Startup persistentStartup = startupRepository.save(newstartup);
		return "Added new startup with ID="+persistentStartup.getId();
		
	}

	@Override
	public Startup getByDetails(String email, String password) {
	    return startupRepository.findByEmail(email)
	            .filter(startup -> startup.getPassword().equals(password))
	            .orElseThrow(() -> new RuntimeException("Invalid email or password"));
	
}
	
	@Override
	public List<Startup> getAllStartups() {
		
		return startupRepository.findAll();
	}


	@Override
	public Startup updateStartup(Startup updatedStartup) {
		Optional<Startup> startup1 = startupRepository.findById(updatedStartup.getId());
		Startup startup = startup1.get();
		startup.setEmail(updatedStartup.getEmail());
		startup.setPassword(updatedStartup.getPassword());
		startup.setCompanyName(updatedStartup.getCompanyName());
		startup.setDesignation(updatedStartup.getDesignation());
		startup.setFounder(updatedStartup.getFounder());
		startup.setDescription(updatedStartup.getDescription());
		startup.setRevenue(updatedStartup.getRevenue());
		return startupRepository.save(startup);
	}


	@Override
	public Boolean deleteStartup(Long id) {
		startupRepository.deleteById(id);
		return true;
		
	}

	
	
	
}
