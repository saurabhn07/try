package com.hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.dao.InvRepository;
import com.hospital.exception.ResourceNotFoundException;
import com.hospital.model.Doctor;
import com.hospital.model.Inv;
import com.hospital.model.PatientSignUp;
import com.hospital.service.InvService;


@CrossOrigin(origins="*")
@RequestMapping("/api/v1")
@RestController
public class InvController {
	
	@Autowired
	private InvRepository invrepository;
	InvService invservice ;
	
	@PostMapping("/inv")
	public Inv addInv(@RequestBody Inv  i) {
		Inv patientsignup = invrepository.save(i);
		return patientsignup;
	}
	
	@GetMapping("/inv/{p_id}")
	public ResponseEntity<Inv> getDoctorById(@PathVariable  int p_id) throws ResourceNotFoundException {
		Inv inv=invrepository.findById(p_id).orElseThrow(() ->new ResourceNotFoundException("Doctor not exist with id :" +p_id));
		return  ResponseEntity.ok(inv);
	}
	
}
