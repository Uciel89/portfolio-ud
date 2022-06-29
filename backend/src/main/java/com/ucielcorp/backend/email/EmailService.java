package com.ucielcorp.backend.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailService {

    final private JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender){
        this.mailSender = javaMailSender;
    }

    public void sendEmail( String from, String to, String subjet, String body){
        // Configuramos el mail que vamos a enviar
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subjet);
        message.setText(body);

        // Enviamos el mensaje
        mailSender.send(message);

        System.out.println("Mail enviado");
    }
}
