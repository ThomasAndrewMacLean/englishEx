import Vue from 'vue';
import Home from '../../../src/components/Home';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    const x = vm.test();
    expect(x)
      .to.equal(78);
  });
  it('renders the correct message', () => {
    const Ctor = Vue.extend(Home);
    const vm = new Ctor().$mount();
    expect(vm.msg).to.equal('Welcome to Your Vue.js App');
  });

  it('courses come from store', () => {
    const Constructor = Vue.extend(Home);
    debugger;
    const vm = new Constructor().$mount();

    vm.$store = {
      getters: {
        courses: ['one', 'two'],
      },
      dispatch() {
        return 0;
      },
    };
    expect(vm.courses.length)
      .to.equal(2);
  });
});
