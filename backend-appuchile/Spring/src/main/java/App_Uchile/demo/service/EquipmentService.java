package App_Uchile.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import App_Uchile.demo.model.Equipment;
import App_Uchile.demo.repository.EquipmentRepository;

@Service
public class EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    public Equipment CreateEquipment(Equipment equipment){
        return equipmentRepository.save(equipment);
    }

    public List<Equipment> GetAllEquipment(){
        return equipmentRepository.findAll();
    }
}
