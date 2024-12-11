package com.Hello_Shark.register.controller;


import com.Hello_Shark.register.model.Admin;
import com.Hello_Shark.register.service.AdminService;

import java.io.InvalidClassException;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Add a new Admin
    @PostMapping("/add")
    public ResponseEntity<?> addNewAdmin(@RequestBody Admin admin) {
        try {
            Admin savedAdmin = adminService.saveAdmin(admin);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("New admin created with ID: " + savedAdmin.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error creating admin: " + e.getMessage());
        }
    }

    // Admin login (email and password check)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin loginDetails) {
        try {
            Admin admin = adminService.getAdminByEmailAndPassword(loginDetails.getEmail(), loginDetails.getPassword());
            // Return a JSON response with relevant information
            return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "name", admin.getName(),
                "email", admin.getEmail()
            ));
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("error", "Admin not found"));
        } catch (Exception e) {
            e.printStackTrace(); // Log the error
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "An error occurred during login"));
        }
    }

}