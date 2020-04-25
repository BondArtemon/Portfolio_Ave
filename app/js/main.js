$(function () {

    $('.product__category-btn').on('click', function () {
        $(this).addClass('active');
        $(".product__category-btn").not(this).removeClass("active");
    });

    $('.tab').on('click', function () {
        $(this).addClass('active');
        $(".tab").not(this).removeClass("active");
    });

    $('.header__user-icon').on('click', function () {
        $('.header__user-icon').toggleClass('active');
    });

    $('.header__menu-burger').on('click', function () {
        $('.header__menu-burger, .header__list').toggleClass('active');
    });

    $('.view__product').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".content__review-star").rateYo({
        rating: 4,
        readOnly: true,
        starWidth: "16px"
    });

    $('.view__tabs-item .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.view__tabs-item').find('.tab-item').removeClass('active-tab').hide();
        $('.view__tabs-item').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input, select').styler();
    

    var mixer = mixitup('.product__look,.product__items');


});