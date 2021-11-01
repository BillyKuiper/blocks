<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">

    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between border-bottom"
    >
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <FooterParagraph
              footerText="1M3"/>
            <FooterParagraph
              footerText="Merchendise"/>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <FooterParagraph
            footerText="Pricing"
            />
            <FooterParagraph
              footerText="Support"
            />
            <FooterParagraph
              footerText="FAQ"
            />
            <FooterParagraph
              footerText="Contact"
            />
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Contact
            </h6>
            <p><i class="fas fa-home me-3"></i> Tilburg, Piusstraat 150</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              blocks.com@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 31 6 279 123 82</p>
            <p><i class="fas fa-print me-3"></i> 0164 256 074</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  </footer>
  <!-- Footer -->
  <div/>
</template>

<script>
import FooterParagraph from '@/components/FooterParagraph.vue'

export default {
  name: 'Footer',
  components: {
    FooterParagraph
  }
}
</script>

<style scoped>
footer{
  margin-top: 40px;
}
</style>
