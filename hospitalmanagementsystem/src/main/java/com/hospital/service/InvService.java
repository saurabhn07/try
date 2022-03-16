package com.hospital.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.dao.InvRepository;
import com.hospital.model.Inv;


@Service
public class InvService {

	@Autowired
	InvRepository  invrepository;
	
	@Transactional 
	  public Inv getPatient(int p_id) { 
	  Optional<Inv> optional= invrepository.findById(p_id);
	  Inv p=optional.get();
	  return p;
	  }
}
