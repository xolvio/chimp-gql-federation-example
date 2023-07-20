package com.example.subgraphtemplatejavadgsshows;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsEntityFetcher;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@DgsComponent
public class ShowsDataFetcher {

    private final List<Show> shows = List.of(
        new Show("1", "Stranger Things", 2016),
        new Show("2", "Ozark", 2017),
        new Show("3", "The Crown", 2016),
        new Show("4", "Dead to Me", 2019),
        new Show("5", "Orange is the New Black", 2013));

    @DgsQuery
    public List<Show> shows(@InputArgument String titleFilter) {
        if (titleFilter == null) {
            return shows;
        }
        return shows.stream().filter(s -> s.getTitle().contains(titleFilter)).collect(Collectors.toList());
    }

    @DgsEntityFetcher(name = "Show")
    public Show show(Map<String, Object> values) {
        String id = (String) values.get("id");
        return shows.stream().filter(s -> s.getId().equals(id)).findFirst().get();
    }
}
