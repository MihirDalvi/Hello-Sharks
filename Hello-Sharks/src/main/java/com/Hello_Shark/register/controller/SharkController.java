package com.Hello_Shark.register.controller;



import com.Hello_Shark.register.model.*;
import com.Hello_Shark.register.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/sharks")
public class SharkController {

    @Autowired
    private SharkRepository sharkRepository;

    // Get all sharks
    @GetMapping("/all")
    public List<Shark> getAllSharks() {
        return sharkRepository.findAll();
    }

    // Add a new shark
    @PostMapping
    public Shark addShark(@RequestBody Shark shark) {
        return sharkRepository.save(shark);
    }
    
    
 // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Shark loginRequest) {
        Shark shark = sharkRepository.findByGmailAndPassword(loginRequest.getGmail(), loginRequest.getPassword());
        if (shark != null) {
            if (!shark.getStatus()) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of(
                    "status", "error",
                    "message", "Account not approved yet"
                ));
            }
            return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Login successful",
                "name", shark.getName()
            ));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
                "status", "error",
                "message", "Invalid email or password"
            ));
        }
    }

    
 // Fetch sharks with status = false
    @GetMapping("/inactive")
    public List<Shark> getInactiveSharks() {
        return sharkRepository.findByStatusFalse();
    }

    @GetMapping("/active")
    public List<Shark> getActiveSharks(){
    	return sharkRepository.findByStatusTrue();
    }
    
    // Update shark status
    @PutMapping("/{id}")
    public Shark updateStatus(@PathVariable Long id, @RequestParam boolean status) {
        System.out.println("Received request to update Shark ID: " + id + " with status: " + status);
        Shark shark = sharkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Shark not found"));
        shark.setStatus(status);
        Shark updatedShark = sharkRepository.save(shark);
        System.out.println("Updated Shark: " + updatedShark);
        return updatedShark;
    }


}
