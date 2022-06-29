package com.ucielcorp.backend.email;

public class Email {
    String email;
    String name;
    String subject;
    String body;

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subjet) {
        this.subject = subjet;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String subject) {
        this.name = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
