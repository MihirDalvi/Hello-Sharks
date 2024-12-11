package com.Hello_Shark.register.service;

import com.Hello_Shark.register.model.Admin;
import com.Hello_Shark.register.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    // Add a new Admin
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    // Login Admin by email and password
    public Admin getAdminByEmailAndPassword(String email, String password) {
        Optional<Admin> adminOptional = adminRepository.findByEmail(email);
        if (adminOptional.isPresent() && adminOptional.get().getPassword().equals(password)) {
            return adminOptional.get();
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }
}