package com.example.subgraphtemplatejavadgsshows;

public class Show {
    private final String id;
    private final String title;
    private final Integer releaseYear;

    public Show(String id, String title, Integer releaseYear) {
        this.id = id;
        this.title = title;
        this.releaseYear = releaseYear;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }
}
