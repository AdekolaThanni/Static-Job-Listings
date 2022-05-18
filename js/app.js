// Filter list

var filterList;
var list = $(".list__item").toArray();

// Adding a filter
$(".list__item-skill").click(function(){
    var text = $(this).text();
    var section = this.dataset.section;
    $(".filter__list").append('<li class="filter__list-item" data-section="' + section + '"><span>'+ text +'</span><svg class="filter__remove" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg></li>');
    $(".filter").css("display", "flex");
    filter();
})

// Removing a filter 
$(".filter").on("click", ".filter__remove", function(){
    var text = $(this).prev().text();
    $(this).parent().remove();
    const newList = filterList.filter(function(item){
        return item != text;
    });
    filterList = newList;
    filter();
    if ($(".filter__list-item").length == 0){
        $(".filter").css("display", "none");
    }
})

$(".filter__clear").click(function(){
    $(".filter__list-item").remove();
    $(".filter").css("display", "none");
    filter();
})

function checkSection(itemName,filterName){
    filterNameSpanText = $($(filterName).children()[0]).text().toLowerCase();
    var section = filterName.dataset.section;
    if ( eval("itemName.dataset." + section).includes(filterNameSpanText) == false ){
        $(itemName).hide();
    }
}

function filter(){
    filterList = $(".filter__list-item").toArray();
    list.forEach(function(item){
        $(item).show();
        filterList.forEach(function(filter){
            checkSection(item,filter);
        })
    })
}