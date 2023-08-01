package com.example.subgraphtemplatejavadgsshows.todoitems;
import com.example.subgraphtemplatejavadgsshows.types.TodoItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.openapitools.client.models.ToDoItem;
@Mapper(componentModel = "spring")
public interface TodoItemsMapper {

    @Mapping(source = "id", target = "id", qualifiedByName = "uuidToString")
    @Mapping(source = "text", target = "text")
    @Mapping(source = "checked", target = "checked", defaultValue = "false")
    @Mapping(source = "listId", target = "listId", qualifiedByName = "uuidToString")
    TodoItem todoItemToDgsTodoItem(ToDoItem todoItem);

    @Named("uuidToString")
    default String uuidToString(java.util.UUID uuid) {
        return uuid != null ? uuid.toString() : null;
    }
}
