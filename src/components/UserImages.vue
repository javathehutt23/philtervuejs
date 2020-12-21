<div class="row">
    <h2>Your Images</h2>
    <p><a class="btn btn-primary text-center float-right" href="/image/add">Upload an Image Now</a></p>
</div>
<div class="row">
    {% flash %}
        <p><div class="alert alert-{{ type == 'error' ? 'danger' : 'success' }}">{{ message }}</div></p>
    {% endflash %}
</div>
<div class="row" v-if="userImages">
    <p class="tags" v-if="image.tags"> Tags:
        <a href="/image/tag/{{ tag }}" class="btn btn-primary btn-sm" v-for="tag in image.tags">{{ tag }} ({{ count }})</a>
    </p>
    <div id="my-images" class="grid" v-for="images in image">
        {% for image in images %}
        <div class="grid-item user" v-for="" >
            <picture v-bind:id="image.image.id">
                <img v-bind:src="image.image.path" v-bind:class="image.filter" v-bind:alt="image.description">
            </picture>
            <h5>{{ image.name }}</h5>
            <p>{{ image.description }}</p>
            <p><a href="/image?delete_image={{ image.id }}" class="btn btn-primary btn-sm">Delete</a></p>
        </div>
        {% endfor %}
        <div class="clearfix"></div>
    </div>
</div>
{% endif %}
