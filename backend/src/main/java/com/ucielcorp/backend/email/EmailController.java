package com.ucielcorp.backend.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mode_edit")
@CrossOrigin(origins = "*")
public class EmailController {
    @Autowired
    EmailService senderService;

    @PostMapping("/email")
    public ResponseEntity<Email> sendEmail(@RequestBody Email mail){
        try{

            String menssage = mail.body  + "\n\n Nombre: " + mail.name + "\n E-mail: " + mail.email;
            senderService.sendEmail("example1@gmail.com", "example2@gmail.com", mail.getSubject(), menssage);
            return new ResponseEntity<>(mail, HttpStatus.OK);

        }catch (MailException e){

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
