package com.example.template

import com.expediagroup.graphql.generator.scalars.ID
import org.openapitools.client.models.ToDoItem

//import org.mapstruct.Mapper
//import org.mapstruct.Mapping
//import org.mapstruct.Named
//import org.openapitools.client.models.ToDoItem
//import org.springframework.stereotype.Component
//import java.util.UUID
//
//@Mapper(componentModel = "spring")
//interface TodoItemsMapper {
//
//    @Mapping(source = "id", target = "id", qualifiedByName = ["uuidToString"])
//    @Mapping(source = "text", target = "text")
//    @Mapping(source = "checked", target = "checked", defaultValue = "false")
//    @Mapping(source = "listId", target = "listId", qualifiedByName = ["uuidToString"])
//    fun todoItemToDgsTodoItem(todoItem: ToDoItem): TodoItem
//
//    @Named("uuidToString")
//    fun uuidToString(uuid: UUID?): String? = uuid?.toString()
//}


object TodoItemsMapper {
    fun map(todoItem: ToDoItem): TodoItem {
        return TodoItem(
            id = ID(todoItem.id.toString()),
            text = todoItem.text,
            checked = todoItem.checked ?: false,
            listId = todoItem.listId.toString(),
        )
    }
}


// //        var modelMapper: ModelMapper = ModelMapper()
////
////        modelMapper.typeMap(ToDoItem.class, TodoItem.class).addMappings(mapper ->
////        {
////            mapper.map(src -> src.getBillingAddress().getStreet(),
////            Destination::setBillingStreet);
////            mapper.map(src -> src.getBillingAddress().getCity(),
////            Destination::setBillingCity);
////        });
