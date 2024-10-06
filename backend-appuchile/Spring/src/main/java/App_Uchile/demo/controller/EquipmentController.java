package App_Uchile.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import App_Uchile.demo.model.Equipment;
import App_Uchile.demo.service.EquipmentService;

@RestController
@RequestMapping(("/Equipo"))
public class EquipmentController {
    @Autowired
    private EquipmentService equipmentService;

    @PostMapping
    public ResponseEntity<Equipment> createEquipment(@RequestBody Equipment equipment){
        Equipment newEquipment = equipmentService.CreateEquipment(equipment);
        return new ResponseEntity<>(newEquipment, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Equipment>> GetEquipment(){
        List<Equipment> equipments = equipmentService.GetAllEquipment();
        return new ResponseEntity<>(equipments, HttpStatus.OK);
    }
}
